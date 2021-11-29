import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { FETCH_SONG } from "../graphql/queries/fetchSong";

export default function SongDetail() {
  const params = useParams();

  const { loading, data } = useQuery(FETCH_SONG, {
    variables: { id: params.id },
  });

  if (loading) return <div>Loading ..</div>;

  const { name, lyrics } = data.song;

  return (
    <div>
      <h2>{name}</h2>
      <div className="text-right">
        <Link className="btn btn-primary" to={`/song/${params.id}/lyric`}>
          Add lyrics
        </Link>
      </div>

      <div className="card mt-2 mb-4">
        <ul className="list-group list-group-flush">
          {lyrics?.length === 0 && (
            <div className="text-center">
              <i> No lyrics</i>
            </div>
          )}
          {lyrics.map((lyric, index) => (
            <li className="list-group-item" key={index}>
              {lyric?.text}
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/songs`}> Back </Link>
    </div>
  );
}
