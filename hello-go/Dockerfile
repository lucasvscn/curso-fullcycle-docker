FROM golang:1.15 as builder

WORKDIR /go

COPY . .

RUN apt-get update && \
    apt-get install -y xz-utils && \
    curl -sL $(curl -s https://api.github.com/repos/upx/upx/releases/latest | grep "http.*amd64_linux.tar.xz" | awk '{print $2; exit}' | sed 's|[\"\,]*||g') | tar xfvJ -

RUN go build -ldflags="-w -s" hello.go && \
    ./upx*/upx --brute hello

FROM scratch
WORKDIR /app
COPY --from=builder /go/hello .
CMD [ "./hello" ]
