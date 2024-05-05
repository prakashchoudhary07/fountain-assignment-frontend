import Image from "next/image";
import { FC } from "react";

export interface Track {
  id: string;
  uri: string;
  name: string;
  release_date: string;
  popularity: number;
  artist: {
    name: string;
  };
  album: {
    images: { url: string; width: number; height: number };
  };
}

const Item: FC<Track> = ({
  name,
  album,
  artist,
  popularity,
  release_date,
  uri,
  id,
}) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl min-w-48 max-w-72">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl min-h-48 max-h-72">
        <Image
          src={album.images.url}
          width={album.images.width}
          height={album.images.height}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <p className="truncate font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
          Album: {name}
        </p>
        <p className="truncate font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          Artist: {artist.name}
        </p>
        <p className="truncate font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          Popularity: {popularity}%
        </p>
        <p className="truncate font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          Release date: {release_date}
        </p>
        <a
          className="truncate font-sans text-sm antialiased font-normal leading-normal"
          href={uri}
        >
          Open in spotify
        </a>
      </div>
    </div>
  );
};

export default Item;
