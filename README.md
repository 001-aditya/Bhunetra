# 🌍 BhuNetra

### Geospatial Intelligence for Watershed Monitoring & Development

> **Seeing the Ground. Understanding the Change.**

BhuNetra is a **GIS-based watershed monitoring and analysis platform** that combines **geo-tagged field photographs, satellite imagery, geospatial data, and AI-assisted analysis** to help visualize, monitor, and evaluate watershed development activities.

The platform is designed around the idea of bringing **ground-level evidence and large-scale satellite observations onto a single interactive map**, enabling officials and stakeholders to understand what is happening across a watershed area.

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Problem Statement](#-problem-statement)
* [Our Solution](#-our-solution)
* [How BhuNetra Works](#-how-bhunetra-works)
* [Core Features](#-core-features)
* [System Workflow](#-system-workflow)
* [System Architecture](#-system-architecture)
* [Technology Stack](#-technology-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [Environment Variables](#-environment-variables)
* [Development Workflow](#-development-workflow)
* [Geospatial Processing](#-geospatial-processing)
* [AI Layer](#-ai-layer)
* [Database Design](#-database-design)
* [API Architecture](#-api-architecture)
* [Example User Journey](#-example-user-journey)
* [Demo Data Strategy](#-demo-data-strategy)
* [Development Roadmap](#-development-roadmap)
* [Future Scope](#-future-scope)
* [Limitations](#-limitations)
* [Why BhuNetra](#-why-bhunetra)
* [Contributing](#-contributing)
* [License](#-license)

---

# 🌱 Overview

Watershed development involves activities such as:

* Check dams
* Farm ponds
* Water harvesting structures
* Plantation
* Contour trenches
* Drainage treatment
* Soil conservation
* Land treatment
* Groundwater-related interventions

Monitoring the effectiveness and spatial distribution of these activities requires information from multiple sources.

BhuNetra brings these sources together into a unified geospatial platform.

### BhuNetra connects:

```text
📸 Geo-tagged Field Images
            +
🛰️ Satellite Imagery
            +
🗺️ Watershed / GIS Data
            +
🤖 AI-assisted Analysis
            ↓
      BhuNetra Platform
            ↓
📊 Visualization + Monitoring + Insights
```

---

# ❗ Problem Statement

Traditional watershed monitoring can involve information coming from different sources:

* Field photographs
* Survey records
* Satellite imagery
* GIS layers
* Watershed boundaries
* Intervention records
* Historical observations

When these sources are not integrated, it becomes difficult to:

1. Locate field observations spatially.
2. Compare field evidence with satellite observations.
3. Monitor changes over time.
4. Visualize watershed interventions.
5. Identify areas requiring attention.
6. Generate a consolidated view for decision-making.

BhuNetra addresses this integration problem through a unified geospatial interface.

---

# 💡 Our Solution

BhuNetra provides an interactive GIS dashboard where users can:

1. Select a watershed.
2. View its geographical boundary.
3. Visualize satellite imagery.
4. View geo-tagged field photographs.
5. Overlay multiple GIS layers.
6. Analyze vegetation and water-related indicators.
7. Compare historical and recent observations.
8. Monitor watershed interventions.
9. Generate analytical summaries and reports.

The key concept is:

> **Ground Evidence + Satellite Observation + Geospatial Analysis = Watershed Intelligence**

---

# 🧠 How BhuNetra Works

The platform follows a multi-stage workflow.

```text
                DATA SOURCES
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
   Field Photos   Satellite    GIS Data
        │          Imagery        │
        └────────────┼────────────┘
                     ↓
              Data Processing
                     ↓
            Geospatial Analysis
                     ↓
          AI-assisted Interpretation
                     ↓
              BhuNetra GIS
                 Dashboard
                     ↓
          Visualization & Reports
```

---

# 🚀 Core Features

## 1. 🗺️ Interactive GIS Dashboard

The central interface provides an interactive map for exploring watershed regions.

Users can:

* Zoom and pan.
* Select watershed boundaries.
* View geographical layers.
* Toggle data layers.
* Inspect locations.
* View field photographs.
* Explore analytical overlays.

---

## 2. 📸 Geo-tagged Field Image Mapping

Field photographs can contain geographical metadata such as:

```text
Latitude
Longitude
Date
Time
Image
```

BhuNetra uses this information to place the photograph at its actual location on the map.

Example:

```text
📍 Location: 26.84° N, 80.94° E

📸 Check Dam

Date:
15 August 2026

Status:
Verified / Under Review
```

---

## 3. 🛰️ Satellite Visualization

Satellite imagery provides a large-scale view of the watershed.

Users can inspect:

* Vegetation
* Water bodies
* Agricultural areas
* Bare/degraded land
* Drainage patterns
* Land-use changes

Satellite layers can be compared with field observations.

---

## 4. 🌱 Vegetation Analysis

BhuNetra can calculate vegetation indicators such as **NDVI (Normalized Difference Vegetation Index)** from suitable satellite imagery.

Conceptually:

```text
NDVI
 ↓
Vegetation condition
 ↓
Spatial visualization
```

The dashboard can display vegetation conditions as a thematic map.

Example:

```text
Low vegetation       → 🔴
Moderate vegetation  → 🟡
Healthy vegetation   → 🟢
```

---

## 5. 💧 Water Body Analysis

Satellite data can be used to analyze water-related features.

Possible outputs include:

* Water-body extent
* Water presence
* Seasonal variation
* Change in water-covered area

Water-related indices such as **NDWI/MNDWI** can be incorporated where appropriate.

---

## 6. 🔄 Change Detection

BhuNetra can compare observations from different time periods.

Example:

```text
        BEFORE                    AFTER

      🌱 🏜️ 🌱                  🌳 🌳 💧
      🏜️ 💧 🏜️                  🌳 💧 💧
```

The system can highlight changes in:

* Vegetation
* Water extent
* Land cover
* Intervention areas

---

## 7. 🏗️ Intervention Monitoring

Watershed interventions can be represented as geospatial features.

Examples:

* Check dams
* Farm ponds
* Plantation areas
* Trenches
* Water harvesting structures
* Drainage interventions

Each intervention can contain:

```text
Intervention ID
Type
Location
Date
Photograph
Status
Remarks
```

---

## 8. 🤖 AI-assisted Image Analysis

AI can be used as a supporting layer.

For example:

```text
Field Image
     ↓
AI Image Analysis
     ↓
Possible Feature
     ↓
Check Dam / Pond / Plantation /
Vegetation / Water Body
     ↓
Map + Metadata
```

The AI result should be treated as an analytical aid and can be reviewed by a human rather than being treated as unquestionable ground truth.

---

## 9. 📊 Watershed Analytics

The dashboard can summarize information such as:

```text
Total Area
────────────────
125 km²

Field Observations
────────────────
184

Interventions
────────────────
62

Water Area Change
────────────────
+12%

Vegetation Change
────────────────
+18%
```

The exact metrics depend on the available datasets and processing methods.

---

## 10. 📄 Report Generation

BhuNetra can generate a watershed-level report containing:

* Watershed overview
* Map
* Field photographs
* Intervention summary
* Vegetation analysis
* Water analysis
* Change detection
* Key observations

---

# 🔄 System Workflow

The complete workflow can be represented as:

```text
                ┌────────────────────┐
                │   Data Collection  │
                └─────────┬──────────┘
                          │
          ┌───────────────┼────────────────┐
          ↓               ↓                ↓
   Geo-tagged Photos  Satellite Data   GIS Boundaries
          │               │                │
          └───────────────┼────────────────┘
                          ↓
                ┌──────────────────┐
                │ Data Validation  │
                └────────┬─────────┘
                         ↓
              ┌─────────────────────┐
              │ Geospatial Processing│
              └─────────┬───────────┘
                        ↓
       ┌────────────────┼────────────────┐
       ↓                ↓                ↓
    NDVI/NDWI       Change Detection   Mapping
       │                │                │
       └────────────────┼────────────────┘
                        ↓
                AI-assisted Analysis
                        ↓
                BhuNetra GIS Dashboard
                        ↓
               Insights + Reports
```

---

# 🏗️ System Architecture

```text
┌───────────────────────────────────────────────┐
│                  FRONTEND                     │
│                                               │
│ React + Vite + Tailwind CSS                  │
│ GIS Map + Dashboard + Analytics              │
└──────────────────────┬────────────────────────┘
                       │
                       │ REST API
                       ↓
┌───────────────────────────────────────────────┐
│                   BACKEND                     │
│                                               │
│ Node.js + Express                            │
│ Authentication                               │
│ Watershed APIs                               │
│ Image APIs                                   │
│ Intervention APIs                            │
└───────────────┬───────────────────────────────┘
                │
       ┌────────┴─────────┐
       ↓                  ↓
┌───────────────┐  ┌────────────────────┐
│   Database    │  │ Python Geo Engine  │
│               │  │                    │
│ MongoDB /     │  │ GeoPandas         │
│ PostgreSQL +  │  │ Rasterio          │
│ PostGIS       │  │ Shapely           │
└───────────────┘  │ GDAL              │
                   │ NumPy             │
                   │ OpenCV            │
                   └─────────┬──────────┘
                             │
                             ↓
                  ┌────────────────────┐
                  │ Satellite / GIS    │
                  │ Data Sources       │
                  └────────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

* React
* Vite
* JavaScript / TypeScript
* Tailwind CSS
* Leaflet / React-Leaflet
* MapLibre GL JS (optional)
* Recharts
* Axios

## Backend

* Node.js
* Express.js
* REST APIs
* Multer for image uploads
* JWT authentication (if required)

## Geospatial Engine

Python:

* GeoPandas
* Rasterio
* Shapely
* GDAL
* NumPy
* OpenCV
* Pandas

## Database

### Option A — MongoDB

Useful for:

* User data
* Field observations
* Image metadata
* Intervention records
* Analysis results

### Option B — PostgreSQL + PostGIS

Recommended for a production-grade geospatial implementation.

PostGIS can handle:

* Spatial points
* Polygons
* Lines
* Spatial queries
* Geometries
* Geographic relationships

---

# 📁 Project Structure

A recommended monorepo structure:

```text
bhunetra/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Map/
│       │   ├── Dashboard/
│       │   ├── Sidebar/
│       │   ├── Analytics/
│       │   └── ImageViewer/
│       │
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── Watershed.jsx
│       │   ├── Analytics.jsx
│       │   └── Reports.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── hooks/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── geo-engine/
│   ├── processors/
│   │   ├── ndvi.py
│   │   ├── ndwi.py
│   │   ├── change_detection.py
│   │   └── image_processing.py
│   │
│   ├── models/
│   ├── utils/
│   ├── requirements.txt
│   └── main.py
│
├── data/
│   ├── sample/
│   ├── geojson/
│   ├── satellite/
│   └── field-images/
│
├── docs/
│   ├── architecture/
│   ├── api/
│   └── screenshots/
│
├── .env.example
├── .gitignore
└── README.md
```

---

# ⚙️ Getting Started

## Prerequisites

Install:

* Node.js
* npm
* Python 3.10+
* Git
* MongoDB or PostgreSQL/PostGIS

Recommended:

* VS Code
* QGIS for geospatial inspection
* GDAL

---

# 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/bhunetra.git

cd bhunetra
```

---

# 2. Setup Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend will normally run on:

```text
http://localhost:5173
```

---

# 3. Setup Backend

```bash
cd backend

npm install

npm run dev
```

Backend will normally run on:

```text
http://localhost:5000
```

---

# 4. Setup Python Geo Engine

```bash
cd geo-engine

python -m venv venv
```

### Linux/macOS

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 5. Environment Variables

Create:

```text
frontend/.env
backend/.env
geo-engine/.env
```

Example:

```env
# Backend
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bhunetra

# Frontend
VITE_API_URL=http://localhost:5000/api

# Satellite / external services
SATELLITE_API_URL=
SATELLITE_API_KEY=

# AI
AI_API_KEY=
```

Never commit real API keys.

Use:

```text
.env
```

inside `.gitignore`.

---

# 🛰️ Geospatial Processing

BhuNetra's geospatial engine is responsible for converting raw spatial data into useful analytical layers.

## NDVI

NDVI can be calculated from suitable red and near-infrared satellite bands.

Conceptually:

```text
              NIR - RED
NDVI = --------------------------
              NIR + RED
```

The result can be converted into a raster layer and displayed on the map.

---

## NDWI / MNDWI

Water-related indices can help identify surface water.

The exact formula depends on the satellite sensor and bands being used.

The output can be converted into:

```text
Water Detection Layer
        ↓
Raster
        ↓
Map Overlay
```

---

# 🔄 Change Detection

BhuNetra can compare two time periods.

```text
Satellite Image – 2024
          ↓
      Processing
          ↓
Satellite Image – 2026
          ↓
      Processing
          ↓
   Difference Analysis
          ↓
    Change Map
```

Potential outputs:

```text
Vegetation Increase
Vegetation Decrease
Water Expansion
Water Reduction
Land-cover Change
```

---

# 🤖 AI Layer

AI is not intended to replace GIS processing.

Instead, it acts as an intelligent supporting layer.

### Possible AI capabilities

#### Image Classification

```text
Input Image
     ↓
AI Model
     ↓
Class Prediction
```

Possible classes:

* Check dam
* Farm pond
* Plantation
* Water body
* Agricultural land
* Vegetation
* Barren/degraded land

---

## AI-assisted Metadata Extraction

AI can assist in converting field observations into structured records.

Example:

```text
Field Photo
    ↓
AI Analysis
    ↓
Possible Intervention
    ↓
Human Verification
    ↓
Database
```

---

# 🗄️ Database Design

Example entities:

## User

```text
User
├── id
├── name
├── email
├── role
└── createdAt
```

## Watershed

```text
Watershed
├── id
├── name
├── district
├── state
├── area
├── boundary
└── createdAt
```

## Field Observation

```text
FieldObservation
├── id
├── watershedId
├── imageUrl
├── latitude
├── longitude
├── capturedAt
├── category
├── confidence
└── verified
```

## Intervention

```text
Intervention
├── id
├── watershedId
├── type
├── latitude
├── longitude
├── date
├── status
├── image
└── remarks
```

## Analysis

```text
Analysis
├── id
├── watershedId
├── analysisType
├── period
├── result
├── generatedAt
└── metadata
```

---

# 🔌 API Architecture

Example API endpoints:

## Watersheds

```http
GET /api/watersheds
GET /api/watersheds/:id
POST /api/watersheds
```

## Field Images

```http
GET /api/field-images
GET /api/field-images/:id
POST /api/field-images
DELETE /api/field-images/:id
```

## Interventions

```http
GET /api/interventions
POST /api/interventions
PATCH /api/interventions/:id
```

## Analysis

```http
POST /api/analysis/ndvi
POST /api/analysis/ndwi
POST /api/analysis/change-detection

GET /api/analysis/:watershedId
```

---

# 👤 Example User Journey

Imagine a government official wants to inspect a watershed.

### Step 1

Open BhuNetra.

```text
Dashboard
```

### Step 2

Select:

```text
State
 ↓
District
 ↓
Watershed
```

### Step 3

The map displays:

```text
Watershed Boundary
Satellite Layer
Field Images
Interventions
```

### Step 4

The official clicks a field photograph.

```text
📸 Field Image

Type:
Check Dam

Location:
26.84, 80.94

Date:
15 Aug 2026
```

### Step 5

The official enables vegetation analysis.

```text
Satellite
       +
NDVI
       ↓
Vegetation Map
```

### Step 6

The official selects:

```text
Compare:
2024 ↔ 2026
```

The system displays changes in the selected region.

### Step 7

The official generates a report.

```text
Watershed Monitoring Report
        ↓
PDF
```

---

# 🧪 Demo Data Strategy

For the prototype stage, the system should not depend completely on unavailable government datasets.

A controlled demonstration dataset can be created using:

* Public satellite imagery
* Public GIS boundaries
* Open geospatial datasets
* Sample GeoJSON
* Properly licensed sample images
* Synthetic intervention records

Example:

```text
Demo Watershed
      ↓
5 km × 5 km area
      ↓
Satellite imagery
      +
20 geo-tagged field images
      +
10 intervention records
      ↓
BhuNetra Analysis
```

When official SRISHTI-DRISHTI data/API access becomes available, the corresponding data connector can replace or supplement the demonstration data.

---

# 🛣️ Development Roadmap

## Phase 1 — UI Prototype

* [ ] BhuNetra branding
* [ ] Dashboard
* [ ] Interactive map
* [ ] Sidebar
* [ ] Watershed selector
* [ ] Analytics cards
* [ ] Responsive design

---

## Phase 2 — GIS Foundation

* [ ] GeoJSON support
* [ ] Watershed boundaries
* [ ] Field-image markers
* [ ] Image metadata
* [ ] Satellite layer
* [ ] Layer controls

---

## Phase 3 — Backend

* [ ] Express server
* [ ] Database
* [ ] Watershed API
* [ ] Image API
* [ ] Intervention API
* [ ] Analysis API

---

## Phase 4 — Geospatial Engine

* [ ] Raster processing
* [ ] NDVI
* [ ] NDWI/MNDWI
* [ ] Spatial analysis
* [ ] Change detection
* [ ] Thematic maps

---

## Phase 5 — AI

* [ ] Image classification
* [ ] Intervention detection
* [ ] Confidence scoring
* [ ] Human verification
* [ ] AI-generated observations

---

## Phase 6 — Decision Support

* [ ] Analytics dashboard
* [ ] Change summaries
* [ ] Intervention monitoring
* [ ] Alerts/attention areas
* [ ] Report generation

---

## Phase 7 — Production Polish

* [ ] Authentication
* [ ] Role-based access
* [ ] Error handling
* [ ] Performance optimization
* [ ] Responsive design
* [ ] Security review
* [ ] Deployment

---

# 🔮 Future Scope

BhuNetra can be extended into a larger watershed intelligence platform.

Potential future capabilities include:

### 🌐 Real-time data integration

Connect directly with government geospatial systems and authorized data services.

### 🛰️ Multi-satellite analysis

Support multiple satellite sources and resolutions.

### 🤖 Advanced computer vision

Automatically detect:

* Water structures
* Plantation
* Cropland
* Erosion
* Degraded areas

### 📱 Mobile field application

A dedicated field application could allow officers to:

```text
Capture Photo
      ↓
GPS automatically recorded
      ↓
Upload
      ↓
BhuNetra
```

### 🔔 Smart monitoring

The system could flag areas requiring human attention based on configured analytical thresholds.

### 📈 Long-term watershed monitoring

Historical analysis could provide:

```text
2022 → 2023 → 2024 → 2025 → 2026
```

and help visualize long-term spatial changes.

---

# ⚠️ Limitations

BhuNetra's analytical results depend on:

* Satellite resolution
* Image quality
* Cloud coverage
* Availability of historical imagery
* Accuracy of GPS metadata
* Quality of watershed boundaries
* Quality of field observations
* Accuracy of AI models

AI predictions and satellite-derived indicators should therefore be treated as **decision-support information**, with important conclusions validated through appropriate ground evidence.

---

# ⭐ Why BhuNetra?

Traditional monitoring can require users to examine different sources independently.

BhuNetra aims to bring those sources into a unified spatial context.

### Traditional approach

```text
Field Photos
     +
Satellite Data
     +
GIS Data
     +
Reports
     ↓
Separate Analysis
```

### BhuNetra

```text
Field Photos
      +
Satellite Data
      +
GIS Data
      +
AI-assisted Analysis
      ↓
 ┌───────────────┐
 │   BhuNetra    │
 │               │
 │ GIS Dashboard │
 └───────┬───────┘
         ↓
Visualization
+
Monitoring
+
Analysis
+
Reports
```

---

# 🎯 Core USP

## **Geo-Evidence → Satellite Validation → Watershed Intelligence**

BhuNetra connects:

> **What is observed on the ground**

with

> **What can be observed across the landscape**

through

> **Geospatial analysis and visualization.**

This creates a common spatial view for watershed monitoring.

---

# 🏆 SIH Prototype Focus

For the initial prototype, BhuNetra focuses on demonstrating the complete pipeline rather than implementing every possible feature.

### Minimum Viable Prototype

```text
1. Select Watershed
        ↓
2. View Boundary
        ↓
3. View Satellite Layer
        ↓
4. Upload / Display Geo-tagged Photos
        ↓
5. Place Photos on Map
        ↓
6. Calculate / Display NDVI
        ↓
7. Compare Two Time Periods
        ↓
8. Display Intervention Locations
        ↓
9. Show Analytics
        ↓
10. Generate Report
```

The objective is to demonstrate a functional end-to-end geospatial workflow.

---

# 👨‍💻 Development Philosophy

BhuNetra follows a modular architecture so that each major capability can be developed independently.

```text
Frontend
   ↓
Backend APIs
   ↓
Geospatial Engine
   ↓
Data Sources
```

This allows the prototype to start with demo data and progressively integrate more authentic datasets and services.

---

# 🤝 Contributing

Contributions are welcome.

### Development process

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Implement your changes.
4. Test locally.
5. Commit.

```bash
git commit -m "feat: add watershed layer"
```

6. Push the branch.

```bash
git push origin feature/new-feature
```

7. Open a Pull Request.

---

# 📄 License

This project can be released under an appropriate open-source license depending on the project's final ownership and SIH requirements.

---

# 🌍 BhuNetra

### **Seeing the Ground. Understanding the Change.**

**Field Evidence × Satellite Intelligence × GIS**

---
