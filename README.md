# Decentralized Voting System on XRPL
This project is a decentralized voting system built on the XRPL (XRP Ledger) testnet using Next.js 14 and TypeScript. The system allows users to create votes, cast votes, and view the results, leveraging blockchain technology for secure and transparent voting.

## Features
- Create Votes: Users can create a new vote with a unique ID and a list of options.
- Cast Votes: Users can cast their vote for a specific option in an existing vote.
- View Results: Users can view the results of a vote by entering the vote ID.
## Technologies Used
- Next.js 14: A React framework for building server-side rendered applications.
- TypeScript: A strongly typed programming language that builds on JavaScript.
- XRPL: XRP Ledger, a decentralized blockchain platform.
- Axios: A promise-based HTTP client for the browser and Node.js.

### Usage
Create a Vote
1. Navigate to the Home Page: Open your browser and go to http://localhost:3000.
2. Fill in the Create Vote form:
    - Vote ID: A unique identifier for the vote (e.g., testVote1).
    - Options: Comma-separated options for the vote (e.g., Option A,Option B,Option C).
3. Click Create Vote: The vote will be created, and you will see a confirmation message.
Cast a Vote
1. Fill in the Vote form:
  - Vote ID: The ID of the vote you want to participate in (e.g., testVote1).
  - User: A unique identifier for the user casting the vote (e.g., User1).
  - Option: The option the user wants to vote for (e.g., Option A).
2. Click Vote: The vote will be recorded, and you will see a confirmation message.
View Results
1. Enter the Vote ID in the input field at the bottom of the page (e.g., testVote1).
2. View Results: The results of the vote will be displayed.
### API Endpoints
- POST /api/vote: Create a new vote or cast a vote.
  - Request body for creating a vote:
{
  "voteId": "testVote1",
  "options": ["Option A", "Option B", "Option C"]
}
  - Request body for casting a vote:
{
  "voteId": "testVote1",
  "user": "User1",
  "option": "Option A"
}
- GET /api/vote: Fetch the results of a vote.
  - Query parameter: voteId (e.g., /api/vote?voteId=testVote1)
### Error Handling
- 400 Bad Request: Returned when there is an issue with the request (e.g., missing required fields, invalid data).
- 500 Internal Server Error: Returned when there is a server-side issue.
### Troubleshooting
- Console Logs: Check the browser console and server logs for error messages.
- Network Tab: Use the Network tab in the browser's developer tools to inspect requests and responses.
- Error Messages: Ensure proper error messages are displayed to help identify issues.
### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
