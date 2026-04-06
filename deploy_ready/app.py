from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, jsonify, render_template, request


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "likes.db"

app = Flask(__name__)


def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    DATA_DIR.mkdir(exist_ok=True)
    with get_db_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS likes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        conn.commit()


def clean_name(name: str) -> str:
    normalized = " ".join(name.strip().split())
    if len(normalized) > 24:
        normalized = normalized[:24]
    return normalized


@app.route("/")
def index():
    return render_template("index.html")


@app.get("/api/likes/recent")
def get_recent_likes():
    limit = request.args.get("limit", default=5, type=int)
    if limit <= 0:
        limit = 5
    if limit > 20:
        limit = 20

    with get_db_connection() as conn:
        rows = conn.execute(
            "SELECT id, name, created_at FROM likes ORDER BY id DESC LIMIT ?",
            (limit,),
        ).fetchall()
        total = conn.execute("SELECT COUNT(*) AS total FROM likes").fetchone()["total"]

    return jsonify(
        {
            "total": total,
            "items": [
                {"id": row["id"], "name": row["name"], "created_at": row["created_at"]}
                for row in rows
            ],
        }
    )


@app.post("/api/likes")
def add_like():
    payload = request.get_json(silent=True) or {}
    raw_name = str(payload.get("name", ""))
    name = clean_name(raw_name)

    if not name:
        return jsonify({"error": "name_required"}), 400

    created_at = datetime.now(timezone.utc).isoformat()

    with get_db_connection() as conn:
        conn.execute(
            "INSERT INTO likes (name, created_at) VALUES (?, ?)",
            (name, created_at),
        )
        conn.commit()
        total = conn.execute("SELECT COUNT(*) AS total FROM likes").fetchone()["total"]

    return jsonify({"ok": True, "total": total, "name": name, "created_at": created_at})


init_db()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
