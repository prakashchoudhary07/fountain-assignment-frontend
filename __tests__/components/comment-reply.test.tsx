import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentReply from "../../src/components/comment-reply";

describe("Comment-reply component", () => {
  it("CommentReply renders input, reply, and cancel buttons", () => {
    const mockCommentInput = "";
    const mockSetCommentInput = vi.fn();
    const mockHandleKeyDown = vi.fn();
    const mockHandleAddComment = vi.fn();
    const mockHandleCancelAction = vi.fn();

    render(
      <CommentReply
        commentInput={mockCommentInput}
        setCommentInput={mockSetCommentInput}
        handleKeyDown={mockHandleKeyDown}
        handleAddComment={mockHandleAddComment}
        handleCancelAction={mockHandleCancelAction}
      />
    );

    // Check input rendering and value
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(mockCommentInput);

    // Check reply button rendering
    expect(screen.getByRole("button", { name: "reply" })).toBeInTheDocument();

    // Check cancel button rendering
    expect(screen.getByRole("button", { name: "cancel" })).toBeInTheDocument();
  });

  it("CommentReply updates input value on change", async () => {
    const mockCommentInput = "";
    const mockSetCommentInput = vi.fn();
    const mockHandleKeyDown = vi.fn();
    const mockHandleAddComment = vi.fn();
    const mockHandleCancelAction = vi.fn();

    render(
      <CommentReply
        commentInput={mockCommentInput}
        setCommentInput={mockSetCommentInput}
        handleKeyDown={mockHandleKeyDown}
        handleAddComment={mockHandleAddComment}
        handleCancelAction={mockHandleCancelAction}
      />
    );

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "new");

    expect(mockSetCommentInput).toHaveBeenCalledTimes(3);
    expect(mockSetCommentInput).toHaveBeenCalledWith("n");
    expect(mockSetCommentInput).toHaveBeenCalledWith("e");
    expect(mockSetCommentInput).toHaveBeenCalledWith("w");
  });

  it("CommentReply calls handleAddComment on reply button click", async () => {
    const mockCommentInput = "";
    const mockSetCommentInput = vi.fn();
    const mockHandleKeyDown = vi.fn();
    const mockHandleAddComment = vi.fn();
    const mockHandleCancelAction = vi.fn();

    render(
      <CommentReply
        commentInput={mockCommentInput}
        setCommentInput={mockSetCommentInput}
        handleKeyDown={mockHandleKeyDown}
        handleAddComment={mockHandleAddComment}
        handleCancelAction={mockHandleCancelAction}
      />
    );

    const replyButton = screen.getByRole("button", { name: "reply" });
    await userEvent.click(replyButton);

    expect(mockHandleAddComment).toHaveBeenCalledTimes(1);
    expect(mockHandleCancelAction).not.toHaveBeenCalled(); // Optional: Verify cancel not called
  });

  it("CommentReply calls handleCancelAction on cancel button click", async () => {
    const mockCommentInput = "";
    const mockSetCommentInput = vi.fn();
    const mockHandleKeyDown = vi.fn();
    const mockHandleAddComment = vi.fn();
    const mockHandleCancelAction = vi.fn();

    render(
      <CommentReply
        commentInput={mockCommentInput}
        setCommentInput={mockSetCommentInput}
        handleKeyDown={mockHandleKeyDown}
        handleAddComment={mockHandleAddComment}
        handleCancelAction={mockHandleCancelAction}
      />
    );

    const cancelButton = screen.getByRole("button", { name: "cancel" });
    await userEvent.click(cancelButton);

    expect(mockHandleCancelAction).toHaveBeenCalledTimes(1);
    expect(mockHandleAddComment).not.toHaveBeenCalled(); // Optional: Verify add not called
  });
});
