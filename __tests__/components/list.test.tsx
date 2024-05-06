import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import List from "../../src/components/list";
import Item from "../../src/components/item";

const mockTracks = [
  {
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
  },
  {
    id: "1239",
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
  },
];

describe("List component", () => {
  it("should render a list of items", () => {
    render(<List list={mockTracks} />);

    expect(screen.getAllByTestId("search-item")).toHaveLength(
      mockTracks.length
    );
  });
});
