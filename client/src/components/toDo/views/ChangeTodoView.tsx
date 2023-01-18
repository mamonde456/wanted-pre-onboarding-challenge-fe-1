import { IChangeTodoProps } from "../../../types/todo";
import { Modal } from "../../common/Modal";

export default function ChangeTodoView({
  onSubmit,
  onChange,
  onDelete,
  setIsDisabled,
  isDisabled,
  isOpen,
  actionType,
  isLoading,
  toDo,
}: IChangeTodoProps) {
  return (
    <>
      {isOpen && <Modal title={toDo?.title || ""} actionType={actionType} />}
      {isLoading ? (
        <p>...is loading</p>
      ) : (
        <>
          <div>
            <p>{toDo?.title}</p>
            <p>{toDo?.content}</p>
            <p>{toDo?.createdAt}</p>
            <p>{toDo?.updatedAt}</p>
          </div>
          <div>
            <button onClick={onDelete}>delete</button>
            <button onClick={() => setIsDisabled((prev) => !prev)}>
              {isDisabled ? "Cancel" : "Edit Todo"}
            </button>
          </div>
          {isDisabled && (
            <>
              <form onSubmit={onSubmit}>
                <p>
                  <label htmlFor="title">title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={onChange}
                    defaultValue={toDo?.title}
                  />
                </p>
                <p>
                  <label htmlFor="content">content</label>
                  <input
                    type="text"
                    id="content"
                    name="content"
                    onChange={onChange}
                    defaultValue={toDo?.content}
                  />
                </p>
                <input type="submit" value="Update To do" />
              </form>
            </>
          )}
        </>
      )}
    </>
  );
}
