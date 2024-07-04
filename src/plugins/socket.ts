// @ts-nocheck
import { useWebSocket } from '@vueuse/core';
import useAlarmStore from '@/store/modules/alarm.ts';

//循环监听心跳定时器
export function websocket() {
  const wsUrl = import.meta.env.VITE_APP_ENV === 'development' ? 'ws://192.168.39.114:8080/service-dispose/websocket' : `ws://${location.hostname}:8080/service-dispose/websocket`;
  const websocket = useWebSocket(wsUrl, {
    // protocols: ['protocol1', 'protocol2'],
    headers: {
      // 'Authorization': 'Bearer your_token'
    },
    // options: {
      // reconnect: true,
      autoReconnect: {
        retries: 3,
        delay: 1000,
        onFailed() {
          console.log('重试3次后连接WebSocket失败');
        },
      },
      heartbeat: {
        message: 'HeartBeat.ping',
        interval: 1000,
        pongTimeout: 1000,
      },
      onOpen: () => {
        console.log('WebSocket connection opened');
      },
      onClose: () => {
        console.log('WebSocket connection closed');
      },
      onError: (_: WebSocket,error: any) => {
        console.error('WebSocket connection error:', error);
      },
      onMessage: (_: WebSocket, ev: MessageEvent) => {
        if (ev && ev.data && ev.data.indexOf('HeartBeat') > -1) {
          // console.log('subscribe->', ev.data)
        } else if (ev && ev.data) {
          // const data = eval('(' + ev.data + ')')
          const data = JSON.parse(ev.data);
          // console.log('onMessage.data', data);
          switch (data.type) {
            case 1:
              useAlarmStore().setAnticipating({ ...data, time: new Date().getTime() });
              break;
            default:
              useAlarmStore().setOther({ ...data, time: new Date().getTime() });
          }
        }
      }
    // }
  })
  return websocket
}
