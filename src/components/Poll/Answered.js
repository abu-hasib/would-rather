import React from "react";

const Answered = () => {
  return (
    <div>
      <h1>Would You Rather</h1>
      <img
        src={users[polls[id].author].avatarURL}
        style={{ height: 50, width: 50 }}
        alt={polls[id].author}
      />
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <input
            type="radio"
            id="optionOne"
            name="poll"
            value="optionOne"
            onChange={(e) => this.handleChange(e)}
          />
          <label for="optionOne">{polls[id].optionOne.text}</label>
        </div>
        <div>
          <input
            type="radio"
            id="optionTwo"
            name="poll"
            value="optionTwo"
            onChange={(e) => this.handleChange(e)}
          />
          <label for="optionTwo">{polls[id].optionTwo.text}</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Answered;
