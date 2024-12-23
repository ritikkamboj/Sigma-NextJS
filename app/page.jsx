"use client";

function Page() {
  const data = {
    name: "ritik",
    work: "Developer",
  };

  async function handleClick() {
    console.log("jai shree ram ");
    const a = await fetch("/api/handler", {
      method: "POST", // Use POST to create a new user
      headers: {
        "Content-Type": "application/json", // Important: Tell the server the data is in JSON format
      },
      body: JSON.stringify(data),
    });
    const res = await a.json();
    console.log(res);
  }

  return (
    <div>
      <p>We are sending data from here</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Page;
