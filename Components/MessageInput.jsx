import { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import { Button, Input } from "@chakra-ui/react";
import { useAppToast } from "../constants/ToastProvider";
import { useChatStore } from "../store/useChatStore";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const { showError } = useAppToast();
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showError("Please select an image file (JPEG, PNG)");
      return;
    }

    // Show preview immediately
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    setIsUploading(true);

    try {
      let imageUrl = null;

      if (imagePreview) {
        try {
          // Convert base64 to blob for Cloudinary upload
          const blob = await fetch(imagePreview).then((r) => r.blob());
          const cloudinaryFormData = new FormData();
          cloudinaryFormData.append("file", blob);
          cloudinaryFormData.append("upload_preset", "texts.");

          const cloudinaryResponse = await fetch(
            `https://api.cloudinary.com/v1_1/karna/image/upload`,
            {
              method: "POST",
              body: cloudinaryFormData,
            }
          );

          if (!cloudinaryResponse.ok) {
            throw new Error("Cloudinary upload failed");
          }

          const cloudinaryData = await cloudinaryResponse.json();
          imageUrl = cloudinaryData.secure_url;
        } catch (error) {
          console.error("Cloudinary upload error:", error);
          showError("Failed to upload image");
          return;
        }
      }

      await sendMessage({
        text: text.trim(),
        image: imageUrl, // Send the Cloudinary URL
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Message send error:", error);
      showError(error.message || "Failed to send message");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-4 w-full relative">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-2 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
              disabled={isUploading}
            >
              <X className="size-6 font-bold" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-1">
        <div className="flex-1 flex gap-2">
          <Input
            type="text"
            placeholder="Type a message..."
            _placeholder={{ color: "#f5e8d892" }}
            borderColor="#1C1C1C "
            focusBorderColor="#FF6F61"
            _hover={{ borderColor: "#FF6F61" }}
            bg={"#1C1C1C "}
            color={"#F5E8D8"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isUploading}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
            disabled={isUploading}
          />

          <div className="flex items-center ">
            <button
              type="button"
              variant={"flushed"}
              className={`hidden sm:flex btn btn-circle ${
                imagePreview || isUploading ? "cursor-not-allowed" : ""
              }`}
              onClick={() => fileInputRef.current?.click()}
              disabled={imagePreview || isUploading}
            >
              <Image
                size={23}
                className={`my-auto ${
                  !imagePreview ? "text-[#DAA520]" : "text-zinc-400"
                }`}
              />
            </button>
            <Button
              type="submit"
              variant={"flushed"}
              color={"#DAA520"}
              disabled={(!text.trim() && !imagePreview) || isUploading}
              isLoading={isUploading}
            >
              {!isUploading && <Send size={23} />}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
