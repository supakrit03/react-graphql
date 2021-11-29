import React from "react";
import { Link } from "react-router-dom";

export default function SongItem({ id, name, onDeleteSong }) {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-auto">
          <Link to={`/song/${id}`} style={{ textDecoration: "none" }}>
            {name}
          </Link>
        </div>
        <div className="col-2">
          <div className="d-flex justify-content-between align-items-center">
            <a
              className="text-danger"
              href={"#delete"}
              onClick={() => onDeleteSong(id)}
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
