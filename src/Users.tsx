import moment from "moment";

export type User = {
  birthdate: string;
  username: string;
};

function Users({ items }: { items: User[] }) {
  return (
    <div>
      {items.map((item, i) => {
        const date = moment(item.birthdate).add(18, "years");
        const isYoungerEighteen = date.isAfter(moment());

        return (
          <div
            key={i}
            className={isYoungerEighteen ? "text-red-500" : "text-white"}
          >
            <span className="mr-3">{item.username}</span>
            <span>{item.birthdate}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
