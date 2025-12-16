# Pixels – Full Wireframe Structure

> **Platform:** Pixels
> **Concept:** Open-source collaborative learning platform for students
> **Core Idea:** Versioned courses & notes improved by the community, ranked by interaction

---

## 1. Global Layout System

### Header (Sticky)

* **Logo (Pixelated P)** – top-left
* **Primary Navigation**

  * Home
  * Browse
  * Create
  * My Contributions
* **Search Bar** (center, expandable)
* **User Avatar** (top-right)

  * Profile
  * Settings
  * Dark Mode Toggle
  * Logout

### Footer

* About Pixels
* Open Source
* Community Guidelines
* GitHub / Discord
* Theme toggle (duplicate for accessibility)

---

## 2. Home Page Wireframe

### Hero Section

* Headline: *"Learn. Fork. Improve."*
* Subtext: *"Open-source courses built by students, for students."*
* Large Search Bar
* CTA Buttons:

  * **Browse Courses** (Primary)
  * **Create Resource** (Accent)

### Featured Sections

#### 🔥 Top Versions

Card Grid (3–4 cards):

* Course Title
* Subject Tag
* ⭐ Interaction Score
* 🔁 Versions Count
* 🧠 Contributors
* Badge: *Top Version* (Gold / Purple)

#### 🆕 Recently Improved

Same card layout, sorted by last meaningful update

#### 🧩 Subjects

Pixel-style icon grid:

* Math
* Computer Science
* Physics
* Design
* Languages

---

## 3. Browse Page

### Left Sidebar (Filters)

* Subject
* Level (Beginner / Intermediate / Advanced)
* Content Type (Course / Notes / Cheatsheet)
* Sort By:

  * Most Interactions
  * Most Improved
  * Latest

### Main Content Area

* Vertical list or grid of course cards
* Infinite scroll or pagination

---

## 4. Course / Resource Page (Core Screen)

### Page Header

* Course Title
* Subject + Level Tags
* Community Score
* Contributors Avatars

### Main Layout (3 Columns)

#### Left Sidebar – Course Structure

* Table of Contents
* Expandable chapters
* Progress indicator (optional)

#### Center – Content Viewer

* **Default:** Highest-ranked version
* Clean reading layout
* Inline highlights for:

  * Additions
  * Corrections
* Floating CTA:

  * ✏️ Improve This Version

#### Right Sidebar – Version Panel

* Current Version Info:

  * Version Number
  * Score
  * Last Updated
* Buttons:

  * View All Versions
  * Compare Versions
  * Discuss

---

## 5. Versions Page

### Version List

Vertical timeline-style list:

* **Version 4.2** ⭐ 124

  * Summary of improvements
  * Author(s)
  * View | Compare

* **Version 3.8** ⭐ 98

* **Version 2.1** ⭐ 54

### Sorting Options

* Highest Score (default)
* Newest
* Oldest

---

## 6. Compare Versions Page

### Split View Layout

* Left: Selected Version A
* Right: Selected Version B

### Diff Highlighting

* 🟢 Green – Added
* 🔴 Red – Removed
* 🟡 Yellow – Modified

### Sticky Top Bar

* Version selectors (dropdowns)
* Swap sides

---

## 7. Improve / Fork Flow

### Step 1 – Edit Mode

* Rich Text / Markdown Editor
* Syntax highlighting (for code)
* Inline comments

### Step 2 – Change Summary (Required)

* Textarea: *"What did you improve and why?"*

### Step 3 – Submit

* Preview changes
* Submit → Creates new version

---

## 8. Create New Resource Page

### Form Sections

* Title
* Subject
* Level
* Description
* Initial Content Editor

### CTA

* Publish Resource

---

## 9. Discussions Page

### Threaded Comments

* Linked to specific versions
* Upvote helpful comments

---

## 10. Profile Page

### Profile Header

* Avatar
* Username
* Bio
* Subjects of Interest

### Stats

* Contributions
* Top Versions
* Total Community Score

### Badges

* Top Contributor
* Version Master
* Peer Reviewer

---

## 11. Design System Notes (Pixels)

### Color Usage

* **Primary / Buttons:** #C800FF
* **Secondary Accent:** #00FFFF
* **Background (Light):** #F5F5FF
* **Surface / Cards:** #E6E0FF
* **Highlights / Links:** #8000FF
* **Success / Top Version:** #FFD700 or #A100FF

### Dark Mode

* Background: #0F001F
* Surfaces: #1E0033
* Accents: Neon #C800FF & #00FFFF

### Visual Style

* Pixel-inspired icons
* Subtle glow on primary actions
* Rounded cards (8–12px)
* Monospace accent font for version numbers

---

## 12. Key UX Principles

* Transparency over edits
* No destructive changes
* Community-driven ranking
* Encourage contribution, not competition

---

**Next Step:**
* Build a clickable prototype
* Mobile wireframe version
