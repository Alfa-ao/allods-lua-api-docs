## EVENT_ORDER_ACHIEVEMENTS_CHANGED

### Описание

```
EVENT_ORDER_ACHIEVEMENTS_CHANGED
```

Присылается при изменении значений достижений. Запрос производится через `order.RequestRatingAchivements`, `order.RequestPrestigeAchivements`.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [order.RequestRatingAchivements](/api/category/order/function.order.RequestRatingAchivements.md)
- [order.RequestPrestigeAchivements](/api/category/order/function.order.RequestPrestigeAchivements.md)

---

## EVENT_ORDER_CAN_VOTE_CHANGED

### Описание

```
EVENT_ORDER_CAN_VOTE_CHANGED
```

Присылается при изменении возможности голосования.

### Список параметров

- **`canVote`** (`boolean`) - `true`, если можно голосовать.

---

## EVENT_ORDER_CHANGED

### Описание

```
EVENT_ORDER_CHANGED
```

Присылается, когда у аватара появляется или пропадает орден.

### Список параметров

Параметры отсутствуют.

---

## EVENT_ORDER_INFO_CHANGED

### Описание

```
EVENT_ORDER_INFO_CHANGED
```

Присылается при изменении информации об ордене. Запрос производится через `order.RequestOrderInfo`.

### Список параметров

Параметры отсутствуют.

### Смотрите также

- [order.RequestOrderInfo](/api/category/order/function.order.RequestOrderInfo.md)

---

## EVENT_ORDER_VOTE_ANSWER

### Описание

```
EVENT_ORDER_VOTE_ANSWER
```

Присылается в ответ на голосование за бонусы.

### Список параметров

- **`isOk`** (`boolean`) - Индикатор успешности голосования.

- **`result`** (`string`) - Результат голосования.