export interface IConfigSchema {
  type: 'integer' | 'number' | 'boolean' | 'string' | 'object';
  format?: 'date' | 'datetime' | 'color' | 'tab';
  enum?: any[];
  required?: string[];
  properties?: {
    [key: string]: IConfigSchema
  };
}

const headerSchema: IConfigSchema = {
  type: 'object',
  required: [],
  properties: {
    'h1': {
      type: 'object',
      required: [],
      properties: {
        'color': {
          type: 'string',
          format: 'color'
        },
        'fontSize': {
          type: 'string'
        },
        'backgroundColor': {
          type: 'string',
          format: 'color'
        },
        'textAlign': {
          type: 'string',
          enum: ['left', 'center', 'right']
        },
        'padding': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'margin': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'width': {
          type: 'string'
        },
        'maxWidth': {
          type: 'string'
        }
      }
    },
    'h2': {
      type: 'object',
      required: [],
      properties: {
        'color': {
          type: 'string',
          format: 'color'
        },
        'fontSize': {
          type: 'string'
        },
        'backgroundColor': {
          type: 'string',
          format: 'color'
        },
        'textAlign': {
          type: 'string',
          enum: ['left', 'center', 'right']
        },
        'padding': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'margin': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'width': {
          type: 'string'
        },
        'maxWidth': {
          type: 'string'
        }
      }
    },
    'h3': {
      type: 'object',
      required: [],
      properties: {
        'color': {
          type: 'string',
          format: 'color'
        },
        'fontSize': {
          type: 'string'
        },
        'backgroundColor': {
          type: 'string',
          format: 'color'
        },
        'textAlign': {
          type: 'string',
          enum: ['left', 'center', 'right']
        },
        'padding': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'margin': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'width': {
          type: 'string'
        },
        'maxWidth': {
          type: 'string'
        }
      }
    },
    'h4': {
      type: 'object',
      required: [],
      properties: {
        'color': {
          type: 'string',
          format: 'color'
        },
        'fontSize': {
          type: 'string'
        },
        'backgroundColor': {
          type: 'string',
          format: 'color'
        },
        'textAlign': {
          type: 'string',
          enum: ['left', 'center', 'right']
        },
        'padding': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'margin': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'width': {
          type: 'string'
        },
        'maxWidth': {
          type: 'string'
        }
      }
    },
    'h5': {
      type: 'object',
      required: [],
      properties: {
        'color': {
          type: 'string',
          format: 'color'
        },
        'fontSize': {
          type: 'string'
        },
        'backgroundColor': {
          type: 'string',
          format: 'color'
        },
        'textAlign': {
          type: 'string',
          enum: ['left', 'center', 'right']
        },
        'padding': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'margin': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'width': {
          type: 'string'
        },
        'maxWidth': {
          type: 'string'
        }
      }
    },
    'h6': {
      type: 'object',
      required: [],
      properties: {
        'color': {
          type: 'string',
          format: 'color'
        },
        'fontSize': {
          type: 'string'
        },
        'backgroundColor': {
          type: 'string',
          format: 'color'
        },
        'textAlign': {
          type: 'string',
          enum: ['left', 'center', 'right']
        },
        'padding': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'margin': {
          type: 'object',
          required: [],
          properties: {
            'left': {
              type: 'string'
            },
            'right': {
              type: 'string'
            },
            'top': {
              type: 'string'
            },
            'bottom': {
              type: 'string'
            }
          }
        },
        'width': {
          type: 'string'
        },
        'maxWidth': {
          type: 'string'
        }
      }
    }
  }
};

const paragraphSchema: IConfigSchema = {
  type: 'object',
  required: [],
  properties: {
    'color': {
      type: 'string',
      format: 'color'
    },
    'fontSize': {
      type: 'string'
    },
    'backgroundColor': {
      type: 'string',
      format: 'color'
    },
    'textAlign': {
      type: 'string',
      enum: ['left', 'center', 'right']
    },
    'padding': {
      type: 'object',
      required: [],
      properties: {
        'left': {
          type: 'string'
        },
        'right': {
          type: 'string'
        },
        'top': {
          type: 'string'
        },
        'bottom': {
          type: 'string'
        }
      }
    },
    'margin': {
      type: 'object',
      required: [],
      properties: {
        'left': {
          type: 'string'
        },
        'right': {
          type: 'string'
        },
        'top': {
          type: 'string'
        },
        'bottom': {
          type: 'string'
        }
      }
    },
    'width': {
      type: 'string'
    },
    'maxWidth': {
      type: 'string'
    }
  }
};

const linkSchema: IConfigSchema = {
  type: 'object',
  required: [],
  properties: {
    'color': {
      type: 'string',
      format: 'color'
    },
    'fontSize': {
      type: 'string'
    },
    'backgroundColor': {
      type: 'string',
      format: 'color'
    },
    'textAlign': {
      type: 'string',
      enum: ['left', 'center', 'right']
    },
    'padding': {
      type: 'object',
      required: [],
      properties: {
        'left': {
          type: 'string'
        },
        'right': {
          type: 'string'
        },
        'top': {
          type: 'string'
        },
        'bottom': {
          type: 'string'
        }
      }
    },
    'margin': {
      type: 'object',
      required: [],
      properties: {
        'left': {
          type: 'string'
        },
        'right': {
          type: 'string'
        },
        'top': {
          type: 'string'
        },
        'bottom': {
          type: 'string'
        }
      }
    },
    'width': {
      type: 'string'
    },
    'maxWidth': {
      type: 'string'
    }
  }
};

const configSchema: IConfigSchema = {
  type: 'object',
  required: [],
  properties: {
    headings: {
      type: 'object',
      format: 'tab',
      properties: {
        header: headerSchema,
        paragraph: paragraphSchema,
        link: linkSchema
      }
    }
  }
}