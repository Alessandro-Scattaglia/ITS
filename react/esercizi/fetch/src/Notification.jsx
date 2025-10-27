import classnames from "classnames";

export default function Notification({ show }) {
  return (
    <div className={classnames("notification", { "is-visible": show })}>
      🥷🥷🥷negro🥷🥷🥷
    </div>
  );
}
