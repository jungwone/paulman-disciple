import PassageForm from "../components/PassageForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";
import PassageService from "../service/PassageService";
import { AddPassageRequest, Passage, UpdatePassageRequest } from "../types";

interface Props {
  passages: Passage[];
  refetchPassages: Function;
}

const Manage = ({ passages = [], refetchPassages }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();

  const updatePassage = async (data: UpdatePassageRequest) => {
    try {
      await PassageService.updatePassage(data);
      const result = await PassageService.getPassages();
      refetchPassages(result);

      toast({
        title: "업데이트 완료",
        description: "🎈",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        description: "오류가 발생했습니다.",
        status: "error",
      });
    }
  };

  const addPassage = async (data: AddPassageRequest) => {
    try {
      await PassageService.addPassage(data);
      const result = await PassageService.getPassages();
      refetchPassages(result);

      toast({
        title: "암송 구절 추가 완료",
        description: "🎈",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        description: "오류가 발생했습니다.",
        status: "error",
      });
      console.error(error);
    }
  };

  return (
    <Box px={8}>
      <Heading as={"h1"}>암송 리스트 관리</Heading>
      <span>(최신순으로 정렬됩니다)</span>
      <main>
        <Box my={4} textAlign="right">
          <Button onClick={onOpen} backgroundColor="#f5566c" color={"#fff"}>
            말씀 추가하기
          </Button>
        </Box>
        <ul>
          {passages.map((passage) => (
            <li key={passage.id} style={{ marginBottom: "16px" }}>
              <PassageForm
                passage={passage}
                mode="update"
                updatePassage={updatePassage}
              />
            </li>
          ))}
        </ul>
      </main>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>암송 구절 추가하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PassageForm mode="add" addPassage={addPassage} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Manage;
