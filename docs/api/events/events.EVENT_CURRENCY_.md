---
outline: deep
---
## EVENT_CURRENCIES_CHANGED

### Описание

```
EVENT_CURRENCIES_CHANGED
```

Изменился список игровых альтернативных валют, имеющихся у игрока.

### Список параметров

Параметры отсутствуют.

---

## EVENT_CURRENCY_EXCHANGE_FINISHED

### Описание

```
EVENT_CURRENCY_EXCHANGE_FINISHED
```

Присылается, если закончился процесс обмена валют. Нужно скрыть интерфейс обмена.

### Список параметров

Параметры отсутствуют.

---

## EVENT_CURRENCY_EXCHANGE_INFO_CHANGED

### Описание

```
EVENT_CURRENCY_EXCHANGE_INFO_CHANGED
```

Присылается, если изменились параметры сервиса обмена валют.

### Список параметров

Параметры отсутствуют.

---

## EVENT_CURRENCY_EXCHANGE_STARTED

### Описание

```
EVENT_CURRENCY_EXCHANGE_STARTED
```

Присылается, если начался процесс обмена валют. Нужно показать интерфейс обмена.

### Список параметров

Параметры отсутствуют.

---

## EVENT_CURRENCY_NOT_ENOUGH

### Описание

```
EVENT_CURRENCY_NOT_ENOUGH
```

Событие присылается при попытке что-либо приобрести при недостаточном количестве игровой альтернативной валюты, имеющейся у игрока.

### Список параметров

- **`id`** (`CurrencyId`) - Идентификатор альтернативной валюты.

---

## EVENT_CURRENCY_VALUE_CHANGED

### Описание

```
EVENT_CURRENCY_VALUE_CHANGED
```

Событие присылается при изменении количества игровой альтернативной валюты, имеющейся у игрока.

### Список параметров

- **`id`** (`CurrencyId`) - Идентификатор альтернативной валюты.

- **`delta`** (`number`) - Число, на которое изменилось значение валюты (может быть как положительным, так и отрицательным).

- **`sysName`** (`string`) - Внутреннее имя альтернативной валюты.

### Смотрите также

- [EVENT_HIDDEN_CURRENCY_VALUE_CHANGED](/api/events/events.EVENT_HIDDEN_CURRENCY_.md#event-hidden-currency-value-changed)