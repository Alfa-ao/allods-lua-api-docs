# avatar.EnableClientDetector
Включает или выключает детектор интерактивных объектов на клиенте.

## Описание
```lua
avatar.EnableClientDetector( type: number, enable: boolean )
```
Управляет состоянием детектора интерактивных объектов на клиенте, таких как квестгиверы, торговцы, тренеры и другие NPC. Возвращаемое значение отсутствует.

::: warning Замечание
При изменении состояния детекторов необходимо поддерживать соответствующую логику в скриптах.
:::

## Список параметров
- **`type`** (`number`)
Тип детектора. Принимает значения из перечисления `CLIENT_DETECTOR_XXX`:
  - `CLIENT_DETECTOR_QUEST_NPC` — NPC, принимающий или выдающий квесты.
  - `CLIENT_DETECTOR_TRAINER_NPC` — Тренер.
  - `CLIENT_DETECTOR_VENDOR_NPC` — Торговец (кроме крафтовых).
  - `CLIENT_DETECTOR_SERVICE_NPC` — Другие NPC.
  - `CLIENT_DETECTOR_PLAYER` — Одногруппники или сорейдовики.
  - `CLIENT_DETECTOR_SPOUSE` — Супруг.
  - `CLIENT_DETECTOR_BATTLEGROUND_CHECKPOINT` — Контрольная точка баттлграунда.
  - `CLIENT_DETECTOR_PROFESSION_NPC` — Крафтовый наставник (торговец).

- **`enable`** (`boolean`)
Флаг управления детектором. Значение `true` включает детектор, `false` — выключает.

## Возвращаемые значения
Возвращаемое значение отсутствует.

## Примеры
### Управление детекторами квестовых NPC и тренеров
```lua
avatar.EnableClientDetector( CLIENT_DETECTOR_QUEST_NPC, true )
avatar.EnableClientDetector( CLIENT_DETECTOR_TRAINER_NPC, false )
```