import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_SONG } from "../graphql/mutations/addSong";
import fetchSongs from "../graphql/queries/fetchSongs";

export default function SongCreate() {
  const navigate = useNavigate();

  const [addSong, { loading, error }] = useMutation(ADD_SONG, {
    refetchQueries: [{ query: fetchSongs }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;

    addSong({ variables: { name: name.value } }).then(() => navigate("/songs"));
  };

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <div>
        <h2>Create Song</h2>
        <form onSubmit={onSubmit}>
          <input className="form-control" name="name" type="text" />
          <div className="text-right">
            <button className="btn btn-primary mt-2">Add</button>
          </div>
        </form>
        <Link to={`/songs`}> Back </Link>
      </div>
    </>
  );
}
