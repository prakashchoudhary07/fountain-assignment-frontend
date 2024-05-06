import { expect, describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Item from "../../src/components/item";

const mockTrack = {
  id: "123",
  uri: "https://open.spotify.com/track/123",
  name: "Test Track",
  release_date: "2024-05-07",
  popularity: 75,
  artist: {
    name: "Test Artist",
  },
  album: {
    images: {
      url: "https://example.com/album-image.jpg",
      width: 300,
      height: 300,
    },
  },
};

describe("Item component", () => {
  it("renders track information and opens link on click", () => {
    render(<Item {...mockTrack} />);

    // Check track details
    expect(screen.getByText(/Track: Test Track/i)).toBeInTheDocument();
    expect(screen.getByText(/Artist: Test Artist/i)).toBeInTheDocument();
    expect(screen.getByText(/Popularity: 75%/i)).toBeInTheDocument();
    expect(screen.getByText(/Release date: 2024-05-07/i)).toBeInTheDocument();

    // Check image rendering (limited test due to Next.js Image)
    const image = screen.getByAltText(/card-image/i);
    expect(image).toBeInTheDocument();

    // Check link behavior (doesn't actually navigate)
    const link = screen.getByText(/Open in spotify/i);
    expect(link).toHaveAttribute("href", mockTrack.uri);
  });

  it("renders image with correct props", () => {
    render(<Item {...mockTrack} />);

    const image = screen.getByAltText(/card-image/i);

    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fexample.com%2Falbum-image.jpg&w=640&q=75"
    );
    expect(image).toHaveAttribute("width", `${mockTrack.album.images.width}`);
    expect(image).toHaveAttribute("height", `${mockTrack.album.images.height}`);
  });
});
