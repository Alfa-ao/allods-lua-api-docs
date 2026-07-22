# mission.SetAESectorVisObj

Назначает VisObject-ы для AEMark типа AEMarkSector.

## Описание

```lua
mission.SetAESectorVisObj( fillerObjId: VisObjectId | nil, leftObjId: VisObjectId | nil, rightObjId: VisObjectId | nil, centerObjId: VisObjectId | nil )
```

Функция назначает объекты VisObject для заполнения, левого и правого краев, а также середины сектора.

## Список параметров

- **`fillerObjId`** (`VisObjectId` | `nil`) - Идентификатор объекта VisObject для заполнения сектора.

- **`leftObjId`** (`VisObjectId` | `nil`) - Идентификатор объекта VisObject для левого края сектора.

- **`rightObjId`** (`VisObjectId` | `nil`) - Идентификатор объекта VisObject для правого края сектора.

- **`centerObjId`** (`VisObjectId` | `nil`) - Идентификатор объекта VisObject для середины сектора.

## Возвращаемые значения

Возвращаемое значение отсутствует.

## Примеры

### Сброс дополнительных объектов сектора

```lua
mission.SetAESectorVisObj( fillerObjId, nil, nil, nil )
```