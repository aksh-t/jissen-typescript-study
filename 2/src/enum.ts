enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const left = Direction.Left

enum Ports {
    USER_SERVICE = "8080",
    REGISTER_SERVICE = "8081",
    MEDIA_SERVICE = "8888"
}

const user_service_port = Ports.USER_SERVICE

enum Ports2 {
    USER_SERVICE = "8080"
}
enum Ports2 {
    REGISTER_SERVICE = "8081"
}
enum Port2 {
    MEDIA_SERVICE = "8888"
}

const media_service_port2 = Port2.MEDIA_SERVICE