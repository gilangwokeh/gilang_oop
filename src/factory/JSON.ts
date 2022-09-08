import User from '../entity/User';
export default class JSON {
  public static user = (user: User) => {
    return {
      email: user.email.string(),
      name: {
        name: user.name._name,
        full: user.name.full()
      }
    };
  }
}