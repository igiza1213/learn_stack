from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

def init_db():
    connection = sqlite3.connect("example.db")
    cursor = connection.cursor()
    cursor.execute("""CREATE TABLE IF NOT EXISTS tasks
                        (id INTEGER PRIMARY KEY, task TEXT)""")
    connection.commit()
    connection.close()

@app.route('/')
def index():
    connection = sqlite3.connect("example.db")
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM tasks")
    tasks = cursor.fetchall()
    connection.close()
    return render_template("index.html", tasks=tasks)

@app.route('/add', methods=['POST'])
def add_task():
    task = request.form['task']
    connection = sqlite3.connect("example.db")
    cursor = connection.cursor()
    cursor.execute("INSERT INTO tasks (task) VALUES (?)", (task,))
    connection.commit()
    connection.close()
    return redirect(url_for("index"))

@app.route('/delete/<int:task_id>')
def delete_task(task_id):
    connection = sqlite3.connect("example.db")
    cursor = connection.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    connection.commit()
    connection.close()
    return redirect(url_for("index"))

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
