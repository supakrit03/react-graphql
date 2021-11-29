import React from "react";
import { useMutation, useQuery } from "@apollo/client";

import SongItem from "./SongItem";
import fetchSongs from "../graphql/queries/fetchSongs";
import { Link } from "react-router-dom";

import { DELETE_SONG } from "../graphql/mutations/deleteSong";

export default function SongList() {
  const { loading, error, data, refetch } = useQuery(fetchSongs);

  const [deleteSong] = useMutation(DELETE_SONG);

  const onDeleteSong = (id) => {
    deleteSong({ variables: { id } }).then(() => refetch());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h2 className="mb-2">My songs</h2>
      <div className="text-right">
        <Link to="/song/new" className="btn btn-primary">
          Add songs
        </Link>
      </div>
      <div className="card mt-3">
        <ul className="list-group list-group-flush">
          {data.songs.map(({ id, name }, index) => (
            <SongItem
              key={index}
              id={id}
              name={name}
              onDeleteSong={onDeleteSong}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
