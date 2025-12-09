# Tarot
Tarot prediction web application.

<img width="2609" height="1721" alt="image" style="border-radius:50%" src="https://github.com/user-attachments/assets/be81b77f-51a5-45ed-a9ff-57acb1e1b659" />


## How it works?

On the frontend user chooses prediction type and enters prompt. When user clicks submit button, backend receives request, chooses random tarot cards and making request to AI API to generate prediction based on the type, user's prompt and tarot cards.

## Stack

**Frontend** *(TypeScript)*:
- React
- TailwindCSS

**Backend** *(Python)*:
- fastAPI
- Pydantic
- SQLalcemy
- google.genai

As database to store all the tarot cards we used SQLite.

## Usage

> Requires Python 3.12+, npm or yarn

Clone the repository:
```bash
git clone https://github.com/yeghor/Tarot.git
cd Tarot
```

Create `.env` file in `backend` directory and fill it with your **Gemini API Key**:
```
GOOGLE_API_KEY="YOUR-SUPER-SECRET-API-KEY"
```

Install dependencies:
```bash
cd backend
pip install -r requirements.txt
cd ..

cd frontend
npm i # or yarn install
```

Run backend and frontend:
```bash
cd backend
uvicorn main:app --reload
```

```bash
cd frontend
npm run dev # yarn dev
```
