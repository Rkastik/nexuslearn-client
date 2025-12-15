import { useContext, lazy, Suspense } from "react";
import UserContext from "../../hooks/UserContext.jsx";
import Loading from "./Loading.jsx";

const AttendanceLayout = () => {
  const AttendanceStudent = lazy(() => import("../queries/AttendanceStudent.jsx"));
  const Attendance = lazy(() => import("../queries/Attendance.jsx"));
  const { user } = useContext(UserContext);
  return (
    <>
      {user.userType === "student" ? (
        <Suspense fallback={<Loading />}>
          <AttendanceStudent />
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <Attendance />
        </Suspense>
      )}
    </>
  );
};

export default AttendanceLayout;
