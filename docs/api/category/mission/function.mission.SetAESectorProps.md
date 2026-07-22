# mission.SetAESectorProps
Назначает свойства для маркера типа сектор.

## Описание
```lua
mission.SetAESectorProps( range: number, angle: number )
```
Функция назначает свойства для маркера (AEMark) типа сектор (AEMarkSector).

## Список параметров
- **`range`** (`number`) - Длина сектора, в метрах.

- **`angle`** (`number`) - Угол раствора сектора, в радианах.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Назначение свойств сектора
```lua
mission.SetAESectorProps( 40.0, Math.pi / 3 )
```