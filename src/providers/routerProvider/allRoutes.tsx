import { NotFound } from "@/components/Common/Notfound/NotFound";
import { Events } from "@/Pages/[Customer]/Events/Events";
import { HobbyMap } from "@/Pages/[Customer]/HobbyMap/HobbyMap";
import { MyEvents } from "@/Pages/[Customer]/MyEvents/MyEvents";
import { PanelEventCreate } from "@/Pages/[Panel]/PanelEventCreate/PanelEventCreate";
import { PanelEventDetail } from "@/Pages/[Panel]/PanelEventDetail/PanelEventDetail";
import useAuthStore from "@/store/authStore";
import { Navigate, RouteObject } from "react-router-dom";

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
  { path: "/my-events", element: <MyEvents /> },
  { path: "/hobby-map", element: <HobbyMap /> },
  { path: "/hobby-list", element: <Events /> },
  { path: "/create-event", element: <PanelEventCreate /> },
  { path: "/event/:eventId", element: <PanelEventDetail /> },

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
