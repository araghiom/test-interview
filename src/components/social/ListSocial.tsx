import { socialIcon } from "@/constant/Form.constant";
import { SocialIconListType } from "@/type/common";
import { ListSocialType, SocialType } from "@/type/profile";
import { Link, Paper, Typography } from "@mui/material";
import CPButton from "../ui/cp-button/CPButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type ListSocialProps = {
  list: ListSocialType;
};

const searchInArray = (iconName: string, list: SocialIconListType) => {
  const result = list.find((item) => item.label === iconName);
  return result?.icon;
};

const ListSocial = ({ list }: ListSocialProps) => {
  const renderedList = (list: ListSocialType) => {
    return list.map((item: SocialType) => {
      const IconComponent = searchInArray(item.type, socialIcon);
      return (
        <Paper
          key={`${item.link}`}
          className="flex flex-row gap-4 justify-between p-4 rounded-[16px]"
        >
          <div className="flex flex-row gap-4 items-center">
            {IconComponent ? <IconComponent /> : null}
            <p>{item.type}</p>
            <Typography className="text-[0.7rem]">link:</Typography>
            <Link href={item?.link} variant="body1">
              {item?.link}
            </Link>
          </div>
          <div>
            <CPButton
              type="button"
              text="edit"
              variant="text"
              startIcon={<EditIcon />}
            />
            <CPButton
              type="button"
              text="delete"
              variant="text"
              color="error"
              startIcon={<DeleteIcon />}
            />
          </div>
        </Paper>
      );
    });
  };

  return <div className="flex flex-col gap-4 my-4">{renderedList(list)}</div>;
};
export default ListSocial;
