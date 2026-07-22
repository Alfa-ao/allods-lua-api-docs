# mission.SetMarkerObject

Устанавливает в заданную точку или удаляет модель маркера.

## Описание

```lua
mission.SetMarkerObject( markerId: VisObjectId | nil, pos: table | nil )
```

Функция устанавливает в заданную точку или удаляет модель маркера.

## Список параметров

- **`markerId`** (`VisObjectId` | `nil`) - Модель маркера или `nil`, если маркер удаляется.

- **`pos`** (`table` | `nil`) - Таблица с позицией маркера или `nil`, если позиция неважна.
  - `posX` (`number`) - Координата X позиции маркера.
  - `posY` (`number`) - Координата Y позиции маркера.
  - `posZ` (`number`) - Координата Z позиции маркера.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Установка модели маркера

```lua
mission.SetMarkerObject( moveToPointMarker, targetPos )
```