import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentBody from "../../src/components/comment-body";

describe("CommentBody component test", () => {
  it("CommentBody renders comment, reply, and delete buttons", () => {
    const mockComment = "This is a test comment.";
    const mockReplyAction = vi.fn();
    const mockDeleteAction = vi.fn();

    render(
      <CommentBody
        comment={mockComment}
        handelReplyAction={mockReplyAction}
        handelDeleteComment={mockDeleteAction}
      />
    );

    // Check comment rendering
    expect(screen.getByText(mockComment)).toBeInTheDocument();

    // Check reply button rendering
    expect(screen.getByRole("button", { name: "reply" })).toBeInTheDocument();

    // Check delete button rendering
    expect(screen.getByRole("button", { name: "delete" })).toBeInTheDocument();
  });

  it("CommentBody calls reply action on reply button click", async () => {
    const mockComment = "This is a test comment.";
    const mockReplyAction = vi.fn();
    const mockDeleteAction = vi.fn();

    render(
      <CommentBody
        comment={mockComment}
        handelReplyAction={mockReplyAction}
        handelDeleteComment={mockDeleteAction}
      />
    );

    const replyButton = screen.getByRole("button", { name: "reply" });
    await userEvent.click(replyButton);

    expect(mockReplyAction).toHaveBeenCalledTimes(1);
    expect(mockDeleteAction).not.toHaveBeenCalled();
  });

  it("CommentBody calls delete action on delete button click", async () => {
    const mockComment = "This is a test comment.";
    const mockReplyAction = vi.fn();
    const mockDeleteAction = vi.fn();

    render(
      <CommentBody
        comment={mockComment}
        handelReplyAction={mockReplyAction}
        handelDeleteComment={mockDeleteAction}
      />
    );

    const deleteButton = screen.getByRole("button", { name: "delete" });
    await userEvent.click(deleteButton);

    expect(mockDeleteAction).toHaveBeenCalledTimes(1);
    expect(mockReplyAction).not.toHaveBeenCalled();
  });
});
