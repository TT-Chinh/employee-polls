export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function checkVotedPoll(question, authedUser){
  let votes = [...question.optionOne.votes,...question.optionTwo.votes]
  return votes.includes(authedUser);
}

export function calculatePercentage(partialValue, totalValue) {
  return ((100 * partialValue) / totalValue).toFixed(0);
}