# TextToHome

# About

The TextToHome Real Estate Assistant is an inbound-first messaging experience built on Linq that allows users to discover real estate listings through SMS or iMessage conversations.

Instead of using traditional apps or complex search filters, users scan a QR code or click a link to start a conversation. From there, the system guides them through a simple conversational flow to understand their preferences such as location and budget.

Once preferences are collected, the system retrieves real property listings and delivers them directly within the chat in a clear and easy to read format.

The experience is designed to feel natural, fast, and effortless, similar to texting a real estate agent, without requiring any account creation, app downloads, or forms.

## 🎯 Key Goals

- Enable instant property browsing through messaging
- Remove friction from traditional real estate search flows
- Demonstrate an inbound-first messaging experience using Linq
- Provide fast, relevant, and conversational listing results

## 💡 Core Idea

Users don’t search for homes, they text and receive listings instantly.

# 🏡 Text-to-Browse Real Estate Assistant — User Stories

## 👤 Primary User: Home Buyer

### 1. Start a chat about houses

**As a home buyer**,  
I want to start a conversation by scanning a QR code or clicking a link,  
so that I can quickly begin browsing homes without downloading an app or creating an account.

### 1. Discover Homes via Text

**As a home buyer**,  
I want to text a phone number and start browsing homes immediately,  
so that I can explore properties without downloading an app or creating an account.

**As a home buyer**,  
I want the system to ask me simple questions (like location and budget),  
so that I can quickly refine what kind of home I’m looking for without filling out forms.

**As a home buyer**,  
I want to receive real property listings based on my preferences,  
so that I can evaluate actual homes that match my needs.

**As a home buyer**,  
I want to adjust my criteria through conversation (e.g., change budget or location),  
so that I can explore different housing options easily.

# ⚙️ Functional Requirements

## 🚪 Entry & Onboarding

- The system must provide a web page accessible via QR code or direct link.
- The system must open the user’s messaging app (SMS/iMessage) with a pre-filled message.
- The pre-filled message must initiate the conversation (e.g., “Hi, I’m looking for homes”).
- The system must detect when a new conversation is started.

## 💬 Conversation Flow

- The system must guide users through a step-by-step conversational flow.
- The system must ask one question at a time (e.g., location, budget).

## 🏡 Listings Experience

- The system must fetch up to 4 relevant real estate listings based on user-provided filters
- The system must format listings for SMS readability (price, location, beds, baths if available).

## 🔄 Refinement & Continuation

- The system must allow users to refine their search (e.g., change location, budget).
- The system must re-run the listing flow when user preferences are updated.

# 🧱 Technical Requirements

## ⚡ Reliability & Error Handling

- The system must gracefully handle failed API requests and return a fallback message to the user.

## 📥 Inbound Rate Limiting

- The system must ignore duplicate or rapid consecutive messages from the same user within a short time window (e.g., a few seconds) and only process the most recent message to prevent spam or repeated actions.

## 📤 Outbound Rate Limiting

- The system must prevent sending duplicate or repeated messages to a user in quick succession to avoid spam-like behavior and ensure a clear, conversational messaging experience.

## 📤 Outbound Message Delay

- The system must introduce a short delay (e.g., 1–3 seconds) before sending outbound messages to simulate natural conversational pacing and avoid immediate automated responses.

# 🧱 Tech Stack

## ⚡ Frontend (Landing Page / QR Entry)

- Next.js
  - Used to build a simple landing page
  - Provides QR code entry point
  - Handles “Start Chat” button with SMS/iMessage deep link (`sms:` URL)

## 🧠 Backend (Core Application Logic)

- Next.js API Routes (or Node.js server)
  - Handles Linq webhook requests
  - Implements conversation state machine
  - Routes messages based on user step (location, budget, etc.)

## 📡 Messaging Platform

- Linq
  - Receives inbound user messages via webhooks
  - Sends outbound messages via API
  - Handles SMS/iMessage delivery

## 🏡 External Listings API

- Apify
  - Fetches real estate listing data
  - Filters results by location and budget
  - Returns structured property data for formatting

## 💾 State Management

- In-memory JavaScript object

## 🚀 Deployment

- Vercel
  - Hosts Next.js frontend and backend
  - Exposes webhook endpoint for Linq integration
