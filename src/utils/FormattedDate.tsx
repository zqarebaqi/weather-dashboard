// import React from "react";

// export default function FormattedDate({ dateAndTime }) {
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day = days[dateAndTime.getDay()];
//   let hours = dateAndTime.getHours();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   let minutes = dateAndTime.getMinutes();
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   return (
//     <div>
//       {day} {hours}:{minutes}
//     </div>
//   );
// }


import React from "react";
import { Box, Typography } from "@mui/material";

interface FormattedDateProps {
  dateAndTime: Date;
}

export default function FormattedDate({ dateAndTime }: FormattedDateProps) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[dateAndTime.getDay()];
  const date = dateAndTime.getDate();
  const month = months[dateAndTime.getMonth()];
  const year = dateAndTime.getFullYear();

  let hours = dateAndTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = dateAndTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap={0.5}
    >
      <Typography variant="h5">{day}</Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1">{`${date} ${month} ${year}`}</Typography>
        <Typography variant="body1">{`${hours}:${minutes}`}</Typography>
      </Box>
    </Box>
  );
}