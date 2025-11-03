
import { useParams } from "react-router";


export default function BlogCategory() {
  const { categoryId } = useParams();
  return (
    <div className="container">
      <div className="text-center">
        <h1> {categoryId}</h1>
      </div>
      <div className="posts-wrapper">
        <div className="post">
          <h3>Duis volutpat, ante et scelerisque luctus</h3>
          <p>
            Integer at dui nec magna posuere fringilla. Nunc euismod bibendum
            augue. Cras nec ligula velit. Donec in laoreet leo.
          </p>
          <h3>Duis volutpat, ante et scelerisque luctus</h3>

          <p>
            Integer at dui nec magna posuere fringilla. Nunc euismod bibendum
            augue. Cras nec ligula velit. Donec in laoreet leo.
          </p>
        </div>
      </div>
    </div>
  );
}
