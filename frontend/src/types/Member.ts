export default interface Member {
  firstName: string;
  lastName: string;
  wardId: string;
  HomeStake: string;
  recommendStatus: string;
  recommendIssueDate: string | Date;
  recommendExpirationDate: string | Date;
}
