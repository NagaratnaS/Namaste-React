const Contact = () => {
  return (
    <div className="font-bold text-3xl p-4 m-4">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <input type="text" placeholder="name" className="border-2 m-2 p-2" />
        <input type="email" placeholder="email" className="border-2 m-2 p-2" />
        <input type="text" placeholder="message" className="border-2 m-2 p-2" />
        <button type="submit" className="border-2 m-2 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
