import React from "react";

import { useNavigate, useParams, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_LYRIC_TO_SONG } from "../graphql/mutations/addLyricToSong";
import { FETCH_SONG } from "../graphql/queries/fetchSong";

export default function SongCreate() {
  const navigate = useNavigate();
  const params = useParams();
  const [addLyricToSong, { loading, error }] = useMutation(ADD_LYRIC_TO_SONG, {
    refetchQueries: [{ query: FETCH_SONG, variables: { id: params.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { text } = e.target;

    addLyricToSong({
      variables: { songId: params.id, lyricText: text.value },
    }).then(() => {
      navigate(`/song/${params.id}`);
    });
  };

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <h2>Create Lyric</h2>
      <form onSubmit={onSubmit}>
        <input className="form-control" name="text" type="text" />
        <div className="text-right">
          <button className="btn btn-primary mt-2">Add</button>
        </div>
      </form>
      <Link to={`/song/${params.id}`}> Back </Link>
    </div>
  );
}
