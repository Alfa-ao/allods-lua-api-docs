## EVENT_LOADING_PROGRESS

### Описание

```
EVENT_LOADING_PROGRESS
```

Событие, информирующее о прогрессе загрузки миссии.

### Список параметров

- **`sysStage`** (`string`(`ENUM_LOADING_PROGRESS_*`)) - фаза загрузки. Значения соответствуют перечислению `ENUM_LOADING_PROGRESS_*`.

- **`current`** (`number`) - текущее количество загруженных ресурсов.

- **`total`** (`number`) - общее количество ресурсов, которые необходимо загрузить.

- **`firstTime`** (`boolean`) - `true`, если событие присылается первый раз после начала очередной загрузки.

- **`finished`** (`boolean`) - завершена ли загрузка.

- **`fraction`** (`number`) - текущий общий прогресс загрузки в долях единицы: [0..1].

- **`mapName`** (`WString`) - название карты.

- **`mapDescription`** (`WString`) - описание карты.

- **`mapImage`** (`TextureId`) - идентификатор текстуры с изображением для данной карты.

::: info Перечисления

Значения соответствуют перечислению `ENUM_LOADING_PROGRESS_*`:

- `ENUM_LOADING_PROGRESS_SYNCHRONIZATION_WITH_SERVER`
- `ENUM_LOADING_PROGRESS_INITIALIZING_LOGIC`
- `ENUM_LOADING_PROGRESS_STARTING_MISSION`
- `ENUM_LOADING_PROGRESS_LOADING_RESOURCES`
- `ENUM_LOADING_PROGRESS_WAITING_AVATAR`

:::