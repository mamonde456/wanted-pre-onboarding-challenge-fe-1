export interface IHeaderProps {
  isLoggedIn: boolean;
  noticeMsg: string | null;
  onLogout: () => void;
}
