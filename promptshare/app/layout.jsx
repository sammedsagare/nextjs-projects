import "@styles/globals.css";

export const metadata = {
  title: "promptshare",
  description: "A place to share GPT prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="main">
          <div />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
