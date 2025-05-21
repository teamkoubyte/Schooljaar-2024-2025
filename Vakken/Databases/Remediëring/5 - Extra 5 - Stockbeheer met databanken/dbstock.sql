SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `tblgebruikers` (
  `id` int(11) NOT NULL,
  `naam` varchar(100) NOT NULL,
  `wachtwoord` varchar(255) NOT NULL,
  `type` enum('gebruiker','admin') NOT NULL DEFAULT 'gebruiker'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `tblgebruikers` (`id`, `naam`, `wachtwoord`, `type`) VALUES
(1, 'mohammed', '$2y$10$22v.BNe1HKM/S626FAq24u447sncL5atd1e6ydbbsZPXXQWql5n0u', 'admin');

CREATE TABLE `tblproducten` (
  `id` int(11) NOT NULL,
  `productnaam` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tblproducten` (`id`, `productnaam`, `stock`) VALUES
(1, 'Cola', 10),
(2, 'Fanta', 200),
(3, 'Sprite', 200),
(4, 'Ice Tea', 200),
(5, 'Pepsi', 200),
(6, 'Spa water', 200),
(7, 'Golden Power', 200),
(8, 'Oasis', 200),
(10, 'Capri Sun', 200);

ALTER TABLE `tblgebruikers`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tblproducten`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tblgebruikers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `tblproducten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;