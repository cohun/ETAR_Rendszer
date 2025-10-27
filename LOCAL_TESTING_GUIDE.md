### How to Test Local Changes

1.  **Modify Your Code:**
    *   Make your desired changes to the project's source files (e.g., `etar_rendszer.html`, `index.html`, etc.).

2.  **Rebuild the Project:**
    *   Open your terminal in the project directory.
    *   Run the build command to update the `public` folder with your changes.
        ```bash
        npm run build
        ```

3.  **View Your Changes:**
    *   Refresh your web browser, which should be open to **http://127.0.0.1:8080**.
    *   Your local server will automatically serve the updated files.

4.  **(If Needed) Restart the Server:**
    *   The server should keep running in the background. If you restart your computer or stop the process, you can restart it with this command:
        ```bash
        start /b C:\Users\HorvathA\AppData\Roaming\npm\http-server.cmd public
        ```