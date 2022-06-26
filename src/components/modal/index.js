import { Modal } from "antd"

const ModalYoutube = (props) => {
    return (
        <>
            <Modal width={props.thumbnail?.width + 50} height={props.thumbnail?.height}  title={props.title} footer={null} visible={props.isModalVisible} onCancel={props.handleCancel}>
                {props.children}
            </Modal>
        </>
    )
}

export default ModalYoutube