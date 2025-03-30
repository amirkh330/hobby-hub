import { PaymentPreview } from "@/Pages/[Customer]/Payment-Preview/PaymentPreview";
import { CoffeesShops } from "@/Pages/[Customer]/Coffees-shops/Coffees-shops";
import { EventReserve } from "@/Pages/[Customer]/EventReserve/EventReserve";
import { NotFound } from "@/components/Common/Notfound/NotFound";
import { EventDetail } from "@/Pages/[Customer]/EventDetail/EventDetail";
import { Events } from "@/Pages/[Customer]/Events/Events";
import { Navigate, RouteObject } from "react-router-dom";
import { PaymentCallBack } from "@/Pages/[Customer]/PaymentCallBack/PaymentCallBack";
import { MyTickets } from "@/Pages/[Customer]/MyTickets/MyTickets";
import { Profile } from "@/Pages/[Customer]/Profile/Profile";
import { Wallet } from "@/Pages/[Customer]/Wallet/Wallet";
import { EditProfile } from "@/Pages/[Customer]/EditProfile/EditProfile";
import { Transactions } from "@/Pages/[Customer]/Transactions/Transactions";
import { PaymentFailed } from "@/Pages/[Customer]/Payment-Failed/PaymentFailed";
import { PaymentSuccess } from "@/Pages/[Customer]/Payment-Success/PaymentSuccess";
import { CoffeeShopDetail } from "@/Pages/[Customer]/CoffeeShopDetail/CoffeeShopDetail";
import useAuthStore from "@/store/authStore";
import { Host } from "@/Pages/[Customer]/Host/Host";
import { Camera } from "@/Pages/[Customer]/Camera/Camera";
import { PanelLogin } from "@/Pages/[Panel]/PanelLogin/PanelLogin";
import { PanelEvents } from "@/Pages/[Panel]/PanelEvents/PanelEvents";
import { PanelSignIn } from "@/Pages/[Panel]/PanelSignIn/PanelSignIn";
import { PanelEventDetail } from "@/Pages/[Panel]/PanelEventDetail/PanelEventDetail";
import { PanelEventCreate } from "@/Pages/[Panel]/PanelEventCreate/PanelEventCreate";
import { PanelGame } from "@/Pages/[Panel]/PanelGame/PanelGame";
import { PanelRoles } from "@/Pages/[Panel]/PanelRoles/PanelRoles";
import { PanelStart } from "@/Pages/[Panel]/PanelStart/PanelStart";
import { RollPreview } from "@/Pages/[Panel]/RollPreview/RollPreview";
import { PanelRegister } from "@/Pages/[Panel]/PanelRegister/PanelRegister";
import { PanelRate } from "@/Pages/[Panel]/PanelRate/PanelRate";
import { PanelRegisterSuccess } from "@/Pages/[Panel]/PanelRegisterSuccess/PanelRegisterSuccess";
import { HobbyMap } from "@/Pages/[Customer]/HobbyMap/HobbyMap";

const PrivateRoute = ({
  element,
  isHost = false,
}: {
  element: JSX.Element;
  isHost?: boolean;
}) => {
  const { isAuth, isHost: isHostStore } = useAuthStore();
  if (isHost) {
    return isAuth && isHostStore ? element : <Navigate to="/" replace />;
  } else return isAuth ? element : <Navigate to="/" replace />;
};

export const allRoutes: Array<RouteObject> = [
  { path: "/my-events", element: <MyTickets /> },
  { path: "/hobby-map", element: <HobbyMap /> },
  { path: "/hobby-list", element: <Events /> },

  // { path: "/panel/login", element:<PanelLogin /> },
  // { path: "/panel/sign-in", element: <PrivateRoute element={<PanelSignIn />} isHost />},
  // { path: "/panel/events", element: <PrivateRoute element={<PanelEvents />} isHost />},
  // { path: "/panel/games/:gameId", element: <PrivateRoute element={<PanelGame />} isHost />},
  // { path: "/panel/games/:gameId/roles", element: <PrivateRoute element={<PanelRoles />} isHost />},
  // { path: "/panel/games/:gameId/start", element: <PrivateRoute element={<PanelStart />} isHost />},
  // { path: "/panel/games/:gameId/rate", element: <PrivateRoute element={<PanelRate />} isHost />},
  // { path: "/panel/events/create", element: <PrivateRoute element={<PanelEventCreate />} isHost />},
  // { path: "/panel/events/:eventId", element: <PrivateRoute element={<PanelEventDetail />} isHost />},

  // { path: "/host", element: <PrivateRoute element={<Host />} isHost />},

  // { path: "/profile", element: <PrivateRoute element={<Profile />} />},
  // { path: "/profile/wallet", element: <PrivateRoute element={<Wallet />} />},
  // { path: "/profile/edit",element: <PrivateRoute element={<EditProfile />} />},
  // { path: "/payment/failed",element: <PrivateRoute element={<PaymentFailed />} />},
  // { path: "/payment/callback",element: <PrivateRoute element={<PaymentCallBack />} />},
  // { path: "/payment/success", element: <PrivateRoute element={<PaymentCallBack />} />},
  // { path: "/profile/transactions",element: <PrivateRoute element={<Transactions />} />},
  // { path: "/payment-preview/:id",element: <PrivateRoute element={<PaymentPreview />} />},
  // { path: "/games/sessions/:sessionId",element: <PrivateRoute element={<RollPreview />} />},
  // { path: "/events/:eventId/dates/:dateId/times/:timeId/reserve",element: <PrivateRoute element={<EventReserve />} />},

  // { path: "/events", element: <Events /> },
  // { path: "/camera", element: <Camera /> },
  // { path: "/my-tickets",  element:<MyTickets />},
  // { path: "/coffees", element: <CoffeesShops /> },
  // { path: "/panel/register", element: <PanelRegister /> },
  // { path: "/panel/register/success", element: <PanelRegisterSuccess /> },
  // { path: "/coffees/:id", element: <CoffeeShopDetail /> },
  // { path: "/event-detail/:id", element: <EventDetail /> },
  // {path: "events/:eventId/dates/:dateId/times/:timeId",element: <EventDetail />},

  { path: "*", element: <NotFound /> },
];
