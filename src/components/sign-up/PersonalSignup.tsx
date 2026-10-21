const PersonalSignup = () => {
  return (
    <main>
      <div>
        <h1>Let's get to know you.</h1>
        <p>Start with your personal details.</p>
      </div>

      <form noValidate>
        <div>
          <div>
            <h1>Name</h1>
            <p>As you’d like it shown.</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="First Name"
              autoComplete="first-name"
            />
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="last-name"
            />
          </div>
        </div>

        <div>
          <div>
            <h1>Date of Birth</h1>
            <p>Format: DD/MM/YYYY</p>
          </div>

          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              autoComplete="bday"
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default PersonalSignup;
