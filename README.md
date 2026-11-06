# Gauri Enterprises – Festival Bonus Slip Portal

A responsive static website for employees to find their Festival Bonus Slip by Employee ID.

## 1. Folder structure

Keep this structure exactly when uploading to GitHub:

```text
Gauri_Festival_Bonus_Portal/
├── index.html
├── style.css
├── script.js
├── README.md
└── bonus-slips/
    ├── GE0001.jpg
    ├── GE0002.jpg
    ├── GE0003.jpg
    └── ...
```

Copy the JPG files from your Festival Bonus Slips JPG ZIP into `bonus-slips/`.
The filename must match the employee ID exactly, for example `GE0004.jpg`.

## 2. Employee ID search

The portal accepts IDs such as:
- `GE0004`
- `GE004`
- `ge0004`

It converts the search to uppercase and normalizes the number to four digits. Valid range: `GE0001` through `GE0199`.

## 3. Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and the `bonus-slips` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub Pages to publish and open the website URL shown there.

## 4. Important privacy warning

GitHub Pages and files in a public GitHub repository are publicly accessible. The search box is only a convenience; it does **not** protect or make the slips private. Anyone who knows or guesses a file URL may open a slip, and the JPG files can be downloaded directly.

Festival bonus slips contain employee information. Do not upload them to a public repository. For real employee use, choose a private/authenticated hosting solution with access control (or a secure HR portal) before uploading actual slips. A private GitHub repository alone does not make a public GitHub Pages site an employee-authenticated portal.

## 5. File type

This starter website expects one JPG per employee in `bonus-slips/`. If you later use PDF slips instead, the file path and preview/download logic in `script.js` must be changed.
